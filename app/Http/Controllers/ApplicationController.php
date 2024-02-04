<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function pending()
    {
        // dd('dd');
        return Inertia::render('Application/Pending');
    }
    public function banned()
    {
        // dd('ddd');
        return Inertia::render('Application/Banned');
    }
}
