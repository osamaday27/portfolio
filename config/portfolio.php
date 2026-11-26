<?php
return [
    'admin_email' => env('ADMIN_EMAIL'),          // receives contact messages and is the dashboard login
    'admin_password' => env('ADMIN_PASSWORD'),    // used only by the seeder
    'frontend_url' => env('FRONTEND_URL', 'http://localhost:5173'),
];
