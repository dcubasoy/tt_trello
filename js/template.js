/* global TrelloPowerUp */
var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';
var WHITE_HELP_ICON = './images/help-64x64.png';
var GRAY_CLOCK_ICON = './images/alarm_grey_108x108.png';
/* Inicializamos el objeto de TRELLO */
TrelloPowerUp.initialize({
    'board-buttons': function(t, options) {
        return [{
            icon: WHITE_HELP_ICON,
            text: '¿Te Ayudamos?',
            callback: show_help
        }];
    },
    'card-buttons': function(t, options) {
        return [{
            icon: GRAY_CLOCK_ICON,
            text: 'Estimar',
            callback: task_time_estimation
        }];
    },
    'show-settings': function(t, options) {
        return t.popup({
            title: 'Settings',
            url: './settings.html',
            height: 184
        });
    }
});
/***********************************************************************************************************/
/* Ventanas de ayuda 
/***********************************************************************************************************/
/* Ventanas de ayuda */
var show_help = function(t) {
    return t.popup({
        title: 'AYUDA',
        items: [{
            text: 'Procedimiento de trabajo',
            callback: function(t) {
                return t.overlay({
                    url: './procedimiento.html',
                    args: {
                        rand: (Math.random() * 100).toFixed(0)
                    }
                }).then(function() {
                    return t.closePopup();
                });
            }
        }, {
            text: 'Leyenda',
            callback: function(t) {
                return t.boardBar({
                    url: './leyenda.html',
                    height: 200
                }).then(function() {
                    return t.closePopup();
                });
            }
        }]
    });
};
var task_time_estimation = function(t) {
    return t.popup({
        title: "Estimación",
        url: 'estimate.html',
    });
};