*** CASH REGISTER ***

function checkCashRegister(price, cash, cid) {
  var cashRegister={
    change: cid
  };
  var change={
    status:'',
    change: []
  };
  var emptyChange=[["ONE HUNDRED", 0],["TWENTY", 0],["TEN", 0],["FIVE", 0],["ONE", 0],["QUARTER", 0],["DIME", 0],["NICKEL", 0],["PENNY", 0]];
  const value=[0.01,0.05,0.1,0.25,1,5,10,20,100];
  var totalCashAvailable=0;
  for(let i=0;i<cid.length;i++){
    totalCashAvailable+=cid[i][1];
  }
  var cashDue=cash-price;
  if(cashDue>totalCashAvailable){
    change.status='INSUFFICIENT_FUNDS';
  }
  for(let i=8;i>=0;i--){
    while(cashDue>=value[i]&&cashRegister.change[i][1]>0){
      cashRegister.change[i][1]-=value[i];
      cashDue-=value[i];
      emptyChange[8-i][1]+=value[i];
      cashDue=cashDue.toFixed(2);
    }
  }
  var totalCashLeft=0;
  for(let i=0;i<cashRegister.change.length;i++){
    totalCashLeft+=cashRegister.change[i][1];
  }
  totalCashLeft=totalCashLeft.toFixed(2);
  if(cashDue==0&&totalCashLeft==0){
    change.status="CLOSED";
    emptyChange=emptyChange.reverse();
    emptyChange[0][1]=parseFloat(emptyChange[0][1].toFixed(1));
    change.change=emptyChange;
  }
  else if(cashDue==0){
    var filteredChange=emptyChange.filter(item=>(
    item[1]!=0
  ))
    change.status="OPEN";
    change.change=filteredChange;
  }
  else{
    change.status='INSUFFICIENT_FUNDS';
  }
  return change;
}
