class JobListing {
  final String? id;
  final String? jobTitle;
  final String? jobDescription;
  final String? companyName;
  final String? salary;
  final String? jobType;
  final String? aboutCompany;
  //final DateTime? createdAt;
  //final DateTime? updatedAt;

  JobListing({
    required this.id,
    required this.jobTitle,
    required this.jobDescription,
    required this.companyName,
    required this.salary,
    required this.jobType,
    required this.aboutCompany,
    // required this.createdAt,
    //required this.updatedAt
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'jobTitle': jobTitle,
      'jobDescription': jobDescription,
      'companyName': companyName,
      'salary': salary,
      'jobType': jobType,
      'aboutCompany': aboutCompany
    };
  }

  factory JobListing.fromMap(Map<String, dynamic> map) {
    return JobListing(
      id: map['_id'],
      jobTitle: map['job_title'],
      jobDescription: map['job_description'],
      companyName: map['company_name'],
      salary: map['salary'],
      jobType: map['job_type'],
      aboutCompany: map['about_company'],
      // createdAt:
      //     json['createdAt'] != null ? DateTime.parse(json['createdAt']) : null,
      // updatedAt:
      //     json['updatedAt'] != null ? DateTime.parse(json['updatedAt']) : null,
    );
  }
}
