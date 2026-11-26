<?php
namespace App\Enums;
enum ProjectCategory: string {
    case Web = 'web'; case Backend = 'backend'; case Ecommerce = 'ecommerce'; case Healthcare = 'healthcare';
    case Management = 'management'; case Education = 'education'; case Business = 'business'; case Api = 'api'; case Ui = 'ui';
}
