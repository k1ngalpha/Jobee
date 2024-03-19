class JobListing {
  final String? id;
  final String? jobTitle;
  final String? jobDescription;
  final String? companyName;
  final String? salary;
  final String? jobType;
  final String? aboutCompany;
  final DateTime? createdAt;
  final DateTime? updatedAt;

  JobListing({
    this.id,
    this.jobTitle,
    this.jobDescription,
    this.companyName,
    this.salary,
    this.jobType,
    this.aboutCompany,
    this.createdAt,
    this.updatedAt,
  });

  factory JobListing.fromJson(Map<String, dynamic> json) {
    return JobListing(
      id: json['_id'],
      jobTitle: json['job_title'],
      jobDescription: json['job_description'],
      companyName: json['company_name'],
      salary: json['salary'],
      jobType: json['job_type'],
      aboutCompany: json['about_company'],
      createdAt:
          json['createdAt'] != null ? DateTime.parse(json['createdAt']) : null,
      updatedAt:
          json['updatedAt'] != null ? DateTime.parse(json['updatedAt']) : null,
    );
  }
}
