import axios from "axios";
import {Api} from "./Api"

export const PaymentsCreatePost = (
  currency,
  amount,
  amountUsd,
  shopId,
  email,
  billingId
) => {
  return Api.post("Payments/Create", {
    currency,
    amount,
    amountUsd,
    shopId,
    email,
    billingId,
  }).then((response) => {
    return response.data;
  });
};

export const PaymentsPost = (
  pageNumber,
  pageSize,
  from,
  to,
  currency,
  status,
  address
) => {
  return Api.post("Payments/Payments", {
    pageNumber,
    pageSize,
    from,
    to,
    currency,
    status,
    address,
  }).then((response) => {
    return response.data;
  });
};
