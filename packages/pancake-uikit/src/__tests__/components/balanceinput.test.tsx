import React from "react";
import { renderWithTheme } from "../../testHelpers";
import BalanceInput from "../../components/BalanceInput/BalanceInput";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<BalanceInput value="14" currencyValue="15 USD" onUserInput={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c3 {
      color: #7A6EAA;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      font-size: 12px;
      text-align: right;
    }

    .c1 {
      background-color: #eeeaf4;
      border: 0;
      border-radius: 14px;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      color: #280D5F;
      display: block;
      font-size: 16px;
      height: 40px;
      outline: 0;
      padding: 0 16px;
      width: 100%;
      border: 1px solid #d7caec;
    }

    .c1::-webkit-input-placeholder {
      color: #7A6EAA;
    }

    .c1::-moz-placeholder {
      color: #7A6EAA;
    }

    .c1:-ms-input-placeholder {
      color: #7A6EAA;
    }

    .c1::placeholder {
      color: #7A6EAA;
    }

    .c1:disabled {
      background-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c1:focus:not(:disabled) {
      box-shadow: 0px 0px 0px 1px #d84165, 0px 0px 0px 4px rgba(216, 65, 10, 0.6);
    }

    .c0 {
      background-color: #eeeaf4;
      border: 1px solid #d7caec;
      border-radius: 14px;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      padding: 8px 16px;
    }

    .c2 {
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
      text-align: right;
      border: none;
    }

    .c2::-webkit-input-placeholder {
      color: #7A6EAA;
    }

    .c2::-moz-placeholder {
      color: #7A6EAA;
    }

    .c2:-ms-input-placeholder {
      color: #7A6EAA;
    }

    .c2::placeholder {
      color: #7A6EAA;
    }

    .c2:focus:not(:disabled) {
      box-shadow: none;
    }

    <div
        class="c0"
      >
        <input
          class="c1 c2"
          inputmode="decimal"
          min="0"
          pattern="^[0-9]*[.,]?[0-9]{0,18}$"
          placeholder="0.0"
          scale="md"
          value="14"
        />
        <div
          class="c3"
          color="textSubtle"
          font-size="12px"
        >
          15 USD
        </div>
      </div>
    </DocumentFragment>
  `);
});
