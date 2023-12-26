const formatCurrency = (amount: number): string => {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'decimal',
      currency: 'VND',
    });
    
    const result = formatter.format(amount);
    return `${result} VND`
  };

export default formatCurrency;