<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration {
    public function up(): void {
        Schema::create('projects', function (Blueprint $t) {
            $t->id();
            $t->string('slug')->unique();
            $t->string('repo');
            $t->json('title');
            $t->json('description')->nullable();
            $t->json('categories');
            $t->json('stack');
            $t->json('case_study')->nullable();
            $t->string('github_url')->nullable();
            $t->string('demo_url')->nullable();
            $t->boolean('is_published')->default(false);
            $t->boolean('is_featured')->default(false);
            $t->unsignedInteger('sort_order')->default(0);
            $t->timestamps();
            $t->softDeletes();
            $t->index(['is_published', 'sort_order']);
        });
        Schema::create('project_images', function (Blueprint $t) {
            $t->id();
            $t->foreignId('project_id')->constrained()->cascadeOnDelete();
            $t->string('type', 20);
            $t->string('path');
            $t->string('thumb_path')->nullable();
            $t->json('alt')->nullable();
            $t->unsignedInteger('sort_order')->default(0);
            $t->timestamps();
            $t->index(['project_id', 'type']);
        });
    }
    public function down(): void { Schema::dropIfExists('project_images'); Schema::dropIfExists('projects'); }
};
