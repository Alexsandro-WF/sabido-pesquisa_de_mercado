
  function redirectClick(destiny){
    google.script.run.withSuccessHandler(refreshApp).getPageHtml(destiny);
  }

function refreshApp(html){
  document.open();
  document.write(html);
  document.close();
}

function preventFormSubmit() {
   var forms = document.querySelectorAll('form');
   for (var i = 0; i < forms.length; i++) {
   forms[i].addEventListener('submit', function(event) {
      event.preventDefault();
   });
   }
}


document.addEventListener('DOMContentLoaded', function() {
   preventFormSubmit();

    //var elems = document.querySelectorAll('select');
    //var instances = M.FormSelect.init(elems, options);
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    //var el = document.querySelectorAll('.tabs');
    //var instance = M.Tabs.init(el);
    var elems = document.querySelectorAll('.datepicker');
    var min = new Date();
    min.setDate(min.getDate() + 45);
    var max = new Date();
    max.setDate(max.getDate() + 120);
    var opts = {
            minDate: min,
            maxDate: max,
            defaultDate: min,
            format:'dd/mm/yyyy',
            disableWeekends: true,
            disableDayFn: function(date) {
               if((date.getDay() == 7)||(date.getDay() == 6)||(date.getDay() == 5)||(date.getDay() == 4)) // getDay() returns a value from 0 to 6, 1 represents Monday
                  return true;
               else
                  return false;
            },
            i18n:{
               months:['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
               monthsShort:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
               weekdays:['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
               weekdaysShort:['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
               weekdaysAbbrev:[ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
               donetext: 'OK',
               clear: 'Limpar',
               cancel: 'Cancelar'
            }};
    var instances = M.Datepicker.init(elems , opts);
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

$('.preloader-background').fadeOut('slow');
$('.preloader-wrapper').fadeOut();

});
