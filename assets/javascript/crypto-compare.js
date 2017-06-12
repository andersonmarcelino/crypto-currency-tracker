'user strict';

var baseUrl = "https://widgets.cryptocompare.com/";

function appendCryptoCurrencyScript(parentNode, path){
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = baseUrl + path + '&app=local' + "";

  parentNode.appendChild(s);
}

appendCryptoCurrencyScript(
  document.querySelector('.all-currencies .widgets-container .crypto-compare'),
  'serve/v1/coin/multi?fsyms=BTC,ETH&tsyms=USD,BRL'
);

appendCryptoCurrencyScript(
  document.querySelector('.bitcoin .widgets-container .crypto-compare'),
  'serve/v1/coin/summary?fsym=BTC&tsyms=USD,BRL'
);

appendCryptoCurrencyScript(
  document.querySelector('.ethereum .widgets-container .crypto-compare'),
  'serve/v1/coin/summary?fsym=ETH&tsyms=USD,BRL'
);
