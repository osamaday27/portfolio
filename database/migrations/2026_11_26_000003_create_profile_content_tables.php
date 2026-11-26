<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration {
    public function up(): void {
        Schema::create('skill_groups', function (Blueprint $t) {
            $t->id(); $t->string('key')->unique(); $t->json('title'); $t->unsignedInteger('sort_order')->default(0); $t->timestamps();
        });
        Schema::create('skills', function (Blueprint $t) {
            $t->id(); $t->foreignId('skill_group_id')->constrained()->cascadeOnDelete();
            $t->string('name'); $t->string('level', 20)->nullable(); $t->unsignedInteger('sort_order')->default(0); $t->timestamps();
            $t->index(['skill_group_id', 'sort_order']);
        });
        Schema::create('experiences', function (Blueprint $t) {
            $t->id(); $t->string('company'); $t->json('title'); $t->json('description')->nullable();
            $t->date('start_date'); $t->date('end_date')->nullable(); $t->unsignedInteger('sort_order')->default(0); $t->timestamps();
        });
        Schema::create('settings', function (Blueprint $t) {
            $t->string('key')->primary(); $t->json('value'); $t->timestamps();
        });
        Schema::create('contact_messages', function (Blueprint $t) {
            $t->id(); $t->string('name', 120); $t->string('email'); $t->string('subject', 200);
            $t->text('message'); $t->string('type', 20); $t->timestamp('read_at')->nullable(); $t->timestamps();
            $t->index('read_at');
        });
    }
    public function down(): void {
        foreach (['contact_messages', 'settings', 'experiences', 'skills', 'skill_groups'] as $t) Schema::dropIfExists($t);
    }
};
