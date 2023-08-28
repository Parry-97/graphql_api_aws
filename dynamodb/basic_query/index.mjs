//Using V3 SDK for DynamoDB
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event, context) => {
  const command = new GetCommand({
    TableName: "Hotel",
    Key: {
      id: event.arguments.id,
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};
