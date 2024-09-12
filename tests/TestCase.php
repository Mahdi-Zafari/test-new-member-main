<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Route;

abstract class TestCase extends BaseTestCase
{
    static public function makeGetRoute($closure): string
    {
        Route::get($path = '/swe983nc4nc2y9', $closure);

        return $path;
    }
}
