angular.module('freshAir')
  .config(['$mdThemingProvider', function($mdThemingProvider){
    var customPrimary = {
        '50': '#94d6f0',
        '100': '#7ecded',
        '200': '#67c4ea',
        '300': '#51bbe7',
        '400': '#3ab3e4',
        '500': '#24aae1',
        '600': '#1c9bcf',
        '700': '#198ab9',
        '800': '#1679a2',
        '900': '#13698c',
        'A100': '#abdef3',
        'A200': '#c1e7f7',
        'A400': '#d7f0fa',
        'A700': '#105875'
    };
    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customAccent = {
        '50': '#526c9b',
        '100': '#49608b',
        '200': '#40557a',
        '300': '#384969',
        '400': '#2f3e59',
        '500': '#263248',
        '600': '#1d2637',
        '700': '#141b27',
        '800': '#0c0f16',
        '900': '#030405',
        'A100': '#5d78aa',
        'A200': '#6e86b2',
        'A400': '#7f94bb',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customAccent', 
                        customAccent);

    var customWarn = {
        '50': '#ffcc80',
        '100': '#ffc166',
        '200': '#ffb74d',
        '300': '#ffad33',
        '400': '#ffa21a',
        '500': '#ff9800',
        '600': '#e68900',
        '700': '#cc7a00',
        '800': '#b36a00',
        '900': '#995b00',
        'A100': '#ffd699',
        'A200': '#ffe0b3',
        'A400': '#ffeacc',
        'A700': '#804c00'
    };
    $mdThemingProvider
        .definePalette('customWarn', 
                        customWarn);

    var customBackground = {
        '50': '#dbdbdb',
        '100': '#cecece',
        '200': '#c1c1c1',
        '300': '#b4b4b4',
        '400': '#a8a8a8',
        '500': '#9B9B9B',
        '600': '#8e8e8e',
        '700': '#818181',
        '800': '#757575',
        '900': '#686868',
        'A100': '#e7e7e7',
        'A200': '#f4f4f4',
        'A400': '#ffffff',
        'A700': '#5b5b5b'
    };
    $mdThemingProvider
        .definePalette('customBackground', 
                        customBackground);

    $mdThemingProvider.theme('freshair')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground');

    $mdThemingProvider.setDefaultTheme('freshair');
}]);