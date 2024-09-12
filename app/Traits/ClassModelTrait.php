<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait ClassModelTrait
{
    protected function makeClassModel(string $model): ?string
    {
        $modelNamespace = 'App\\Models\\';
        $modelType = ucfirst($model);
        if (class_exists($modelNamespace . $modelType)) {
            return $modelNamespace . $modelType;
        }
        return null;

    }
}
