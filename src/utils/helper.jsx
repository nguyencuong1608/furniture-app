export const getUniqueValue = (data, dataType) => {
  let tempData = data.map((item) => {
    return item[dataType];
  });
  if (dataType == "colors") {
    tempData = tempData.flat();
  }
  let newData = new Set(tempData);
  return ["all", ...newData];
};

export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};
