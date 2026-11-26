<?php
namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class AdminSeeder extends Seeder {
    public function run(): void {
        $email = config('portfolio.admin_email'); $password = config('portfolio.admin_password');
        if (! $email || ! $password) throw new \RuntimeException('Set ADMIN_EMAIL and ADMIN_PASSWORD in .env before seeding.');
        User::updateOrCreate(['email' => $email], ['name' => 'Ahmed Amasha', 'password' => Hash::make($password)])
            ->forceFill(['is_admin' => true])->save();
    }
}
