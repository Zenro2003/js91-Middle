import React from 'react';
import './Calculator.css'; // Đường dẫn đến file CSS của bạn

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: '', // State để lưu trữ chuỗi tính toán
    };
  }

  // Xử lý khi click vào các nút số và phép tính
  handleButtonClick = (value) => {
    this.setState((prevState) => ({
      calculation: prevState.calculation + value,
    }));
  };

  // Xử lý khi click vào nút Clear
  handleClear = () => {
    this.setState({
      calculation: '',
    });
  };

  // Xử lý khi click vào nút Equals (=)
  handleEquals = () => {
    try {
      const result = eval(this.state.calculation);
      this.setState({
        calculation: result.toString(),
      });
    } catch (error) {
      this.setState({
        calculation: 'Error',
      });
    }
  };
  
  render() {
    return (
      <div className="frame">
        <div className="calculator-title">Calculator</div>
        <div className="mainCalc">
          <div className="screen-row">
            <input
              type="text"
              className="screen"
              value={this.state.calculation}
              readOnly
            />
          </div>
          <div className="button-row">
            <input
              type="button"
              className="btnaction"
              value="Clear"
              onClick={this.handleClear}
            />
            <input
              type="button"
              className="btnaction"
              value="Delete"
              onClick={() =>
                this.setState((prevState) => ({
                  calculation: prevState.calculation.slice(0, -1),
                }))
              }
            />
            <input
              type="button"
              className="btnaction"
              value="/"
              onClick={() => this.handleButtonClick('/')}
            />
          </div>
          <div className="button-row">
            <input
              type="button"
              value="8"
              onClick={() => this.handleButtonClick('8')}
            />
            <input
              type="button"
              value="9"
              onClick={() => this.handleButtonClick('9')}
            />
            <input
              type="button"
              className="btnaction"
              value="+" 
              onClick={() => this.handleButtonClick('+')}
            />
          </div>
          <div className="button-row">
            {/* Thêm các nút bấm khác và xử lý sự kiện onClick tương tự */}
            <input
              type="button"
              value="6"
              onClick={() => this.handleButtonClick('6')}
            />
            <input
              type="button"
              value="7"
              onClick={() => this.handleButtonClick('7')}
            />
            <input
              type="button"
              className="btnaction"
              value="*"
              onClick={() => this.handleButtonClick('*')}
            />
          </div>
          <div className="button-row">
            {/* Thêm các nút bấm khác và xử lý sự kiện onClick tương tự */}
            <input
              type="button"
              value="4"
              onClick={() => this.handleButtonClick('4')}
            />
            <input
              type="button"
              value="5"
              onClick={() => this.handleButtonClick('5')}
            />
            <input
              type="button"
              className="btnaction"
              value="-"
              onClick={() => this.handleButtonClick('-')}
            />
          </div>
          <div className="button-row">
            {/* Thêm các nút bấm khác và xử lý sự kiện onClick tương tự */}
            <input
              type="button"
              value="2"
              onClick={() => this.handleButtonClick('2')}
            />
            <input
              type="button"
              value="3"
              onClick={() => this.handleButtonClick('3')}
            />
            <input
              type="button"
              className="btnaction"
              value="."
              onClick={() => this.handleButtonClick('.')}
            />
          </div>
          <div className="button-row">
            {/* Thêm các nút bấm khác và xử lý sự kiện onClick tương tự */}
            <input
              type="button"
              value="0"
              onClick={() => this.handleButtonClick('0')}
            />
            <input
              type="button"
              value="1"
              onClick={() => this.handleButtonClick('1')}
            />
            <input
              type="button"
              className="btnaction"
              value="="
              onClick={this.handleEquals}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
