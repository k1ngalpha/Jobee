import 'package:flutter/material.dart';
import 'package:jobee/models/job-listing.dart';

import '../services/api-client.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<JobListing> jobListings = [];

  @override
  void initState() {
    super.initState();
    _fetchListings();
  }

  Future<void> _fetchListings() async {
    try {
      List<JobListing> listings = await fetchListings();
      setState(() {
        jobListings = listings;
      });
    } catch (error) {
      print('Failed to fetch from backend: $error');
      // Handle error
    }
  }

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
