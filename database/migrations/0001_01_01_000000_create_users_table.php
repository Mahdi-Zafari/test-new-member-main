<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('is_online')->default(false);
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->date('birthday')->nullable();
            $table->boolean('is_admin')->default(false);
            $table->decimal('weight', 5, 2)->nullable();
            $table->integer('height')->nullable();
            $table->enum('marital_status', ['single', 'married'])->nullable();
            $table->boolean('has_hijab')->nullable();
            $table->string('living_city')->nullable();
            $table->string('living_district')->nullable();
            $table->enum('eye_color', ['black', 'brown', 'blue', 'green'])->nullable();
            $table->enum('hair_color', ['black', 'brown', 'yellow'])->nullable();
            $table->enum('skin_color', ['dark', 'bronze', 'white'])->nullable();
            $table->string('body_type')->nullable();
            $table->boolean('has_disability')->nullable();
            $table->boolean('has_child')->nullable();
            $table->boolean('want_child')->nullable();
            $table->boolean('is_alcoholic')->nullable();
            $table->enum('lives_with', ['family', 'alone'])->nullable();
            $table->string('education')->nullable();
            $table->string('profession')->nullable();
            $table->decimal('income', 10, 2)->nullable();
            $table->string('job_type')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
