import 'package:flutter/material.dart';
import 'package:jobee/screens/home_screen.dart';

import 'screens/sign-in.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: SignInScreen());
  }
}
