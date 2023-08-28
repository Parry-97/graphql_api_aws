import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event, _context) => {
  const command = new QueryCommand({
    TableName: "HotelS2P2",
    IndexName: "city-hotel_name-index",
    KeyConditionExpression: "city = :queryCity",
    ExpressionAttributeValues: {
      ":queryCity": event.arguments.city,
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};
