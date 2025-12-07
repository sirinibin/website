<?php
// Gulf Union Ozone - Contact Form Handler
// This file handles contact form submissions and sends emails

// Set content type for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    $required_fields = ['name', 'email', 'message'];
    foreach ($required_fields as $field) {
        if (empty($input[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }
    
    // Sanitize input data
    $name = filter_var(trim($input['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
    $company = filter_var(trim($input['company'] ?? ''), FILTER_SANITIZE_STRING);
    $service = filter_var(trim($input['service'] ?? ''), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($input['message']), FILTER_SANITIZE_STRING);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email address');
    }
    
    // Email configuration
    $to_email = 'info@gulfunionozone.com'; // Replace with actual email
    $subject = "New Contact Form Submission from $name";
    
    // Create email content
    $email_content = generateEmailContent($name, $email, $company, $service, $message);
    
    // Email headers
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        "From: Gulf Union Ozone Website <noreply@gulfunionozone.com>",
        "Reply-To: $name <$email>",
        'X-Mailer: PHP/' . phpversion()
    ];
    
    // Send email
    $mail_sent = mail($to_email, $subject, $email_content, implode("\r\n", $headers));
    
    if ($mail_sent) {
        // Log successful submission (optional)
        error_log("Contact form submission from $email - $name");
        
        echo json_encode([
            'success' => true,
            'message' => 'Message sent successfully! We\'ll get back to you soon.'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred: ' . $e->getMessage()
    ]);
    
    // Log error
    error_log("Contact form error: " . $e->getMessage());
}

function generateEmailContent($name, $email, $company, $service, $message) {
    $company_display = $company ?: 'Not specified';
    $service_display = $service ?: 'Not specified';
    $message_display = $message ?: 'No message provided';
    
    return "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .header h2 { margin: 0; font-size: 24px; }
            .header p { margin: 5px 0 0 0; opacity: 0.9; }
            .content { padding: 20px; background: #f8fafc; border-radius: 8px; margin-bottom: 20px; }
            .content h3 { color: #2563eb; margin-top: 0; }
            .field { margin-bottom: 15px; }
            .field strong { display: inline-block; width: 120px; color: #4a5568; }
            .message-content { background: #fff; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb; }
            .footer { margin-top: 20px; padding: 15px; background: #e5f3ff; border-radius: 8px; border-left: 4px solid #2563eb; }
            .footer p { margin: 0; font-size: 14px; color: #64748b; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Gulf Union Ozone</h2>
                <p>New Contact Form Submission</p>
            </div>
            
            <div class='content'>
                <h3>Contact Information</h3>
                <div class='field'><strong>Name:</strong> $name</div>
                <div class='field'><strong>Email:</strong> $email</div>
                <div class='field'><strong>Company:</strong> $company_display</div>
                <div class='field'><strong>Service:</strong> $service_display</div>
            </div>
            
            <div class='content'>
                <h3>Message</h3>
                <div class='message-content'>
                    " . nl2br(htmlspecialchars($message_display)) . "
                </div>
            </div>
            
            <div class='footer'>
                <p>This email was sent from the Gulf Union Ozone website contact form. Please respond directly to $email</p>
            </div>
        </div>
    </body>
    </html>
    ";
}
?>