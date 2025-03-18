---
title: "Learn About Black Hats by Putting on a White One"
excerpt: "Learn cybersecurity by doing with this hands-on security testing project. Using Vagrant and Docker, you'll explore real-world attack scenarios in a controlled environment. Test vulnerabilities, run reconnaissance, and strengthen your security skills."
topic: "engineering"
date: "2022-02-26"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
---

Cybersecurity is a critical skill for modern developers, yet it often remains a theoretical subject. This project aims to change that by providing a practical, "learning by doing" approach to understanding security vulnerabilities, attacks, and mitigation strategies.

[GitHub Repository: Security Testing](https://github.com/svo/security-testing)

## Project Overview

This repository provides a hands-on environment for learning cybersecurity concepts through practical exercises. It uses [Vagrant](https://www.vagrantup.com/) to automate the setup of two [Docker](https://www.docker.com/) containers:

1. **Attack Container**: Preloaded with common security testing tools to identify and exploit vulnerabilities.
2. **Victim Container**: Configured with known vulnerabilities that can be targeted by the Attack Container.

## How It Works

The repository contains a set of [examples](https://github.com/svo/security-testing/tree/main/examples) demonstrating various security concepts. These examples include scripts executed on either the Attack Container or the Victim Container to simulate real-world security scenarios.

### Setting Up the Environment

To get started:

1. Install [Vagrant](https://www.vagrantup.com/) and [Docker](https://www.docker.com/).
2. Clone the repository:
   ```bash
   git clone https://github.com/svo/security-testing.git
   cd security-testing
   ```
3. Start the containers:
   ```bash
   vagrant up
   ```
4. Access the machines:
   - Attack Container: **vagrant ssh**
   - Victim Container: **vagrant ssh victim**

## Security Tools Introduced

The following tools are included to facilitate different aspects of security testing:

### **Reconnaissance & Enumeration**

- **nmap** - Port and IP scans/enumeration
- **theHarvester** - User information harvesting
- **arachni**, **skipfish**, **htcap**, **wapiti** - Web security reconnaissance
- **dnsmap**, **dnsrecon** - Domain name discovery
- **dig** - DNS queries and information gathering

### **Exploitation & Attacks**

- **ncrack** - Brute force authentication attack
- **mitmproxy** - Man-in-the-middle attacks
- **hping3**, **slowhttptest**, **ab** (Apache Bench), **mz** (Mausezahn) - Denial of service attacks

### **Practical Exercises**

Each example script provides a step-by-step guide for performing security tests, such as:

- Scanning for open ports and services
- Conducting brute-force attacks
- Exploiting known vulnerabilities
- Simulating denial-of-service attacks
- Performing MITM attacks
- Harvesting information about users and networks

## Important Considerations

- This project is intended for **educational purposes only**. Unauthorized use of security testing tools on systems without permission is illegal and unethical.
- Always use these tools in a controlled environment, such as the containers provided.
- Understanding these attacks helps developers build **stronger security defenses** in real-world applications.
