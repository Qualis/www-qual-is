---
title: "Make your macOS setup testable and repeatable"
excerpt: "For quite some time I have been using Ansible to manage my OS X / macOS setup."
coverImage: "/assets/blog/categories/engineering.png"
date: "2022-03-12"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
ogImage:
  url: "/assets/blog/categories/engineering.png"
---

## Make your macOS setup testable and repeatable

For quite some time I have been using [Ansible](https://www.ansible.com/) to manage my **macOS** setup.

[https://github.com/svo/my-macos-setup](https://github.com/svo/my-macos-setup)

Since the setup has a great many things within it. I would suggest forking the [GitHub repository](https://github.com/svo/my-macos-setup) and modifying it to your needs.

You can remove roles that you don’t want in your setup by removing the corresponding entry in the **roles** section of the **playbook.yml** file.

![Roles](/assets/blog/my-macos-setup/roles.png "Roles")

If you want to see what is in a role, as some are bundles of things like e.g. **cli-tools**, you can browse the **roles** directory and open the corresponding **tasks/main.yml** file.

![Roles Directory](/assets/blog/my-macos-setup/roles-directory.png "Roles directory")
