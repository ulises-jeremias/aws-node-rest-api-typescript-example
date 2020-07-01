import { constants } from 'http2';

enum StatusCode {
  success = constants.HTTP_STATUS_OK,
}

/**
 * Serverless: According to the API Gateway specs, the body content must be stringified
 */
const awsResult = (statusCode: number, code: number, message: string, data?: any) => ({
  statusCode,
  body: JSON.stringify({
    code,
    message,
    data,
  }),
});

export const success = (data: object) => {
  return awsResult(StatusCode.success, 0, 'success', data);
};

export const error = (code: number = 1000, message: string) => {
  const result = awsResult(StatusCode.success, code, message);
  console.log(result);
  return result;
};
