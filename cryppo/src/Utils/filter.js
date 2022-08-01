const filtersTool = (props, category, subcategory) => {
    let currency = [];
    let operations = [];

    currency = props.currency.filter((item) => {
        return item.category === category;
    });

    currency = currency[0];

    operations = currency.childCurrencyStatistics.filter((item) => {
        return item.parentCategory === category;
    });

    // operations = props.operationData.operation.filter((item) => {
    //     return item.type === category;
    // });

    if (subcategory !== undefined) {
        operations = operations.filter((item) => {
            return item.firm === subcategory;
        });
    }
    return {currency, operations}
}

export default filtersTool;