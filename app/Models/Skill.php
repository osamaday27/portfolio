<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Skill extends Model { protected $fillable = ['skill_group_id', 'name', 'level', 'sort_order']; }
