// https://calculator.swiftutors.com/net-profit-margin-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const netProfitMarginRadio = document.getElementById('netProfitMarginRadio');
const netIncomeRadio = document.getElementById('netIncomeRadio');
const salesRevenueRadio = document.getElementById('salesRevenueRadio');

let netProfitMargin;
let netIncome = v1;
let salesRevenue = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

netProfitMarginRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income';
  variable2.textContent = 'Sales Revenue';
  netIncome = v1;
  salesRevenue = v2;
});

netIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Profit Margin';
  variable2.textContent = 'Sales Revenue';
  netProfitMargin = v1;
  salesRevenue = v2;
});

salesRevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Profit Margin';
  variable2.textContent = 'Net Income';
  netProfitMargin = v1;
  netIncome = v2;
});

btn.addEventListener('click', function() {
  
  if(netProfitMarginRadio.checked)
    result.textContent = `Net Profit Margin = ${computeNetProfitMargin().toFixed(2)} %`;

  else if(netIncomeRadio.checked)
    result.textContent = `Net Income = ${computeNetIncome().toFixed(2)}`;

  else if(salesRevenueRadio.checked)
    result.textContent = `Sales Revenue = ${computeSalesRevenue().toFixed(2)}`;
})

// calculation

function computeNetProfitMargin() {
  return Number(netIncome.value) / Number(salesRevenue.value);
}

function computeNetIncome() {
  return Number(netProfitMargin.value) * Number(salesRevenue.value);
}

function computeSalesRevenue() {
  return Number(netIncome.value) / Number(netProfitMargin.value);
}