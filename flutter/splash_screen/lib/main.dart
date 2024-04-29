import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: HomeScreen()
    )
  );
}

// StatelessWidget
class HomeScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // hex code 사용하기
        backgroundColor: Color(0xFFD09DAC),
        // image 표시하기
        body: Padding(
          padding: EdgeInsets.symmetric(horizontal: 32.0),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text("쬼둥냥"),
                Image.asset(
                    'asset/img/logo.jpeg'),
                SizedBox(height: 28.0), // Padding보다 효율이 좋아짐
                CircularProgressIndicator(
                    color: Colors.white
                ),
              ]
          ),
        )
    );
  }

}