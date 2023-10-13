from flask import Flask
from flask_restful import Resource, Api, reqparse
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
api = Api(app)


client = MongoClient("mongodb://db:27017/")
db = client.customers_db
customers = db.customers


parser = reqparse.RequestParser()
parser.add_argument('customerId', type=str, required=True, help='Customer ID is required')
parser.add_argument('customerName', type=str, required=True, help='Customer name is required')
parser.add_argument('customerMobile', type=str, required=True, help='Customer mobile is required')
parser.add_argument('customerAddress', type=str, required=True, help='Customer address is required')


class CustomerResource(Resource):
    def get(self, customerId=None):
        if customerId:
            customer = customers.find_one({"_id": ObjectId(customerId)})
            if customer:
                customer['_id'] = str(customer['_id'])
                return customer, 200
            return {"message": "Customer not found"}, 404
        else:
            all_customers = list(customers.find())
            for customer in all_customers:
                customer['_id'] = str(customer['_id'])
            return all_customers, 200

    def post(self):
        args = parser.parse_args()
        result = customers.insert_one({
            "customerId": args['customerId'],
            "customerName": args['customerName'],
            "customerMobile": args['customerMobile'],
            "customerAddress": args['customerAddress']
        })
        return {
                   "customerId": str(result.inserted_id),
                   "customerName": args['customerName'],
                   "customerMobile": args['customerMobile'],
                   "customerAddress": args['customerAddress']
               }, 201

    api.add_resource(CustomerResource, '/customers', '/customers/<string:customerId>')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
