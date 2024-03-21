import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:jobee/models/job-listing.dart';

const API_BASE_URL = "http://192.168.0.108:3000";

Future<List<JobListing>> fetchListings() async {
  final response = await http.get(Uri.parse('$API_BASE_URL/api/all-listing'));
  try {
    if (response.statusCode == 200) {
      final responseData = jsonDecode(response.body);
      final List<JobListing> listings = (responseData['data'] as List)
          .map((item) => JobListing.fromMap(item))
          .toList();
      return listings;
    } else {
      print('Falied to fetch from backend');
      throw Exception('Falied to fetch from backend');
    }
  } catch (error) {
    print(error);
    throw Exception('Internal server error');
  }
}
