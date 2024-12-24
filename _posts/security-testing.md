---
title: "Learn about black hats by putting on a white one"
excerpt: "I am in no way an expert in this field, but I thought it might prove interesting to setup a small project for developers to use a “learning by doing” approach to understanding cyber security. https://github.com/svo/security-testing"
coverImage: "/assets/blog/categories/engineering.png"
date: "2022-02-26"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
ogImage:
  url: "/assets/blog/categories/engineering.png"
---

## Learn about black hats by putting on a white one

I am in no way an expert in this field, but I thought it might prove interesting to setup a small project for developers to use a “learning by doing” approach to understanding cybersecurity.

[https://github.com/svo/security-testing](https://github.com/svo/security-testing)

The project using [Vagrant](https://www.vagrantup.com/) to build two [VirtualBox](https://www.virtualbox.org/) Virtual Machines. The first of these Virtual Machines has some common tooling that I have used to identify vulnerabilities, the second is setup as a victim with known vulnerabilities to exploit.

The [examples](https://github.com/svo/security-testing/tree/main/examples) in the repository are scripts that you run either on the tooling Virtual Machine to enact the attack, or on the victim Virtual Machine to see the result.

Tools introduced:

* `dnsmap` - Domain name discovery
* `dnsrecon` - Domain name discovery
* `ncrack` - Authentication attack
* `nmap` - Port and IP scans/enumeration
* `slowhttptest` - Denial of service attacks
* `hping3` - Denial of service attacks
* `ab` (Apache Bench) - Denial of service attacks
* `dig` - Denial of service attacks
* `mz` (Mausezahn) - Denial of service attacks
* `mitmproxy` - Man in the middle
* `theHarvester` - User information harvesting
* `arachni` - Security reconnaissance
* `skipfish` - Security reconnaissance
* `htcap` - Security reconnaissance
* `wapiti` - Security reconnaissance

I hope the project proves interesting.
