const proceed = (granted, whenGrantedIs, whenGrantedIsNot) =>
  whenGrantedIs
    ? Boolean(granted) && whenGrantedIs === granted
    : whenGrantedIsNot
    ? Boolean(granted) && whenGrantedIsNot !== granted
    : false;

export default proceed;
