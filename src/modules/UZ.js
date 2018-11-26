(function ($) {
  $(document).ready(function () {
    function checkJs() {
      // Add cookie js if need
      if (!$('script').filter('[src*="cookie"]').length) {
        $('<script/>', {
          'src': 'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js',
        }).appendTo($('body'));
      }
    }

    function addTable() {
      var content = $('.hot-direction');
      var TableTitle = ["Status", "Update interval in seconds", "Counter", "Actions "];
      var TableValue = ["Waiting", "60", "0", "no"];
      var TableValueClass = ["status", "interval", "counter", "actions"];

      var mytable = $('<table/>', {
        class: 'info-table',
        style: 'width: 100%; margin-top: 20px;',
        border: 1
      }).append(
        $('<thead/>'),
        $('<tbody/>')
      ).appendTo(content);

      var TitleCell = $('<tr/>');

      $.each(TableTitle, function (myIndex, myData) {
        TitleCell.append(
          $('<th/>', {
            text: myData
          })
        );
      });
      $("thead", mytable).append(TitleCell);

      var DataCell = $('<tr/>', {
        style: 'text-align: center;'
      });
      $.each(TableValue, function (myIndex, myData) {
        DataCell.append(
          $('<td/>', {
            text: myData,
            class: TableValueClass[myIndex]
          })
        );
        $("tbody", mytable).append(DataCell);
      });

      var interval = $('<input/>', {
        class: 'update-interval',
        value: '60'
      });
      $('.info-table .interval').html(interval);

      var startButton = $('<button/>', {
        name: 'start-search',
        text: 'Start',
        click: startSearch
      });
      var stopButton = $('<button/>', {
        name: 'stop-search',
        text: 'Stop',
        click: stopSearch
      });
      $('.info-table .actions').html('').append(startButton).append(stopButton);
    }

    function setstatus(status) {
      $('.info-table .status').html(status);
    }

    function checkStatus() {

      var form = $('#search-frm form');
      var table = $('table.info-table');
      var from = $('input[name="from-title"]', form).val();
      var to = $('input[name="to-title"]', form).val();
      var fromId = $('input[name="from"]', form).val();
      var toId = $('input[name="to"]', form).val();
      var date = $('input[name="date-hover"]', form).val();
      var innterval = parseInt($('input.update-interval', table).val());
      // console.log('form', form);
      // console.log('table', table);
      // console.log('from', from);
      // console.log('to', to);
      // console.log('fromId', fromId);
      // console.log('toId', toId);
      // console.log('date', date);
      // console.log('innterval', innterval);
      if (from && to && fromId && toId && date && innterval) {
        setstatus('Ready');
        return true;
      } else {
        setstatus('Error: From or To not set!');
        return false;
      }
    }

    function setSettings() {
      var form = $('#search-frm form');
      var table = $('table.info-table');
      var from = $('input[name="from-title"]', form).val();
      var to = $('input[name="to-title"]', form).val();
      var fromId = $('input[name="from"]', form).val();
      var toId = $('input[name="to"]', form).val();
      var date = $('input[name="date-hover"]', form).val();
      var innterval = parseInt($('input.update-interval', table).val());
      var counter = parseInt($('td.counter', table).text());
      counter = counter + 1;
      $.cookie('station_from', from);
      $.cookie('station_till', to);
      $.cookie('station_id_from', fromId);
      $.cookie('station_id_till', toId);
      $.cookie('date', date);
      $.cookie('innterval', innterval);
      $.cookie('counter', counter);
    }

    function getSettings() {
      var table = $('table.info-table');
      var from = $.cookie('station_from');
      var to = $.cookie('station_till');
      var fromId = $.cookie('station_id_from');
      var toId = $.cookie('station_id_till');
      var date = $.cookie('date');
      var innterval = parseInt($.cookie('innterval'));
      var counter = parseInt($.cookie('counter'));
      if (from && to && fromId && toId && date) {
        $('input.update-interval', table).val(innterval);
        $('td.counter', table).text(counter);
        return {
          station_from: from,
          station_till: to,
          station_id_from: fromId,
          station_id_till: toId,
          date: date,
          innterval: innterval,
          counter: counter
        };
      } else {
        return false;
      }

    }

    function startSearch() {
      if (checkStatus()) {
        setSettings();
        var settings = getSettings();
        search(settings);
      }
    }

    function search(settings) {
      var table = $('table.info-table');
      var form = $('form.train_search');
      var innterval = parseInt($('input.update-interval', table).val());

      $('input[name="from-title"]', form).val(settings.station_from);
      $('input[name="to-title"]', form).val(settings.station_till);
      $('input[name="from"]', form).val(settings.station_id_from);
      $('input[name="to"]', form).val(settings.station_id_till);
      $('input[name="date-hover"]', form).val(settings.date);
      $('button[name="search"]', form).click();
      setTimeout(function () {
        checkSearchResult();
      }, 10000);

      // console.log('innterval', innterval);
      // console.log('settings', settings);
      // console.log('innterval', innterval);
      // console.log('form was submitted');

      setTimeout(function () {
        setSettings();
        window.location.reload(1);
      }, innterval + '000');
    }

    function stopSearch() {
      var form = $('form.train_search');
      $.cookie('station_from', '');
      $.cookie('station_till', '');
      $.cookie('station_id_from', '');
      $.cookie('station_id_till', '');
      $.cookie('counter', '');
      $.cookie('date', '');
      $.cookie('innterval', '');
      $('input[name="from-title"]', form).val('');
      $('input[name="to-title"]', form).val('');
      $('input[name="from"]', form).val('');
      $('input[name="to"]', form).val('');
      $('audio').remove();
    }

    function checkSearchResult() {
      var result = $('table.train-table tbody tr td.place').length;
      if (result) {
//        playMusic();
      }
    }

    function playMusic() {
      $('<audio/>', {
        'src': 'http://dl1.mrload.net/aHR0cHM6Ly9wc3Y0LnVzZXJhcGkuY29tL2M2MTU3L3U2ODc0MDU4Ny9hdWRpb3MvMTY4Zjc3MjNlNzkwLm1wMz9leHRyYT1fMWo2aWFEZnp6OW1WNERzMVdJRFVGZHB2SjNoNWxhMnpLai14QmpfS09HUktFSUdJRDl6a0lTYUJ2ZHZKT01vUnRkYzhFS3NNUVNQd3JGal9xNmxCajJTZkhCaTlndE1BSU5OSEE4V0RnSUxaTmNoQnNobDZZa0xoNHNXd2JaMVZuZml0MmNxY2N3JnRpdGxlPSVEMCU5NyVEMCVCMiVEMSU4MyVEMCVCQSstKyVEMCU5MyVEMSU4MyVEMCVCNCVEMCVCRSVEMCVCQSslRDAlQkYlRDAlQkUlRDAlQjUlRDAlQjclRDAlQjQlRDAlQjAmaWQ9Njg3NDA1ODdfMjgyODMzMTIw',
        'autoplay': 1,
        'loop': 1
      }).appendTo($('body'));
    }

    function uzInit() {
      checkJs();
      addTable();

      setTimeout(function () {
        var settings = getSettings();
        if (settings) {
          search(settings);
        }
      }, 1000);
    }

    uzInit();
  });
})(jQuery);
