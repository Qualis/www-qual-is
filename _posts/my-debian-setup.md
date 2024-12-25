---
title: "Make your Debian setup testable and repeatable"
excerpt: "For quite some time I have been using Ansible to manage my OS X / Debian setup."
coverImage: "/assets/blog/categories/engineering.png"
date: "2022-03-13"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
ogImage:
  url: "/assets/blog/categories/engineering.png"
---

## Make your Debian setup testable and repeatable

For even longer than I have been using [Ansible](https://www.ansible.com/) to manage [my macOS setup](/posts/my-macos-setup), I have been using the same process for **Debian** (was previously **Ubuntu**, but was converted to support both).

[https://github.com/svo/my-debian-setup](https://github.com/svo/my-debian-setup)

Since the setup has a great many things within it. I would suggest forking the [GitHub repository](https://github.com/svo/my-debian-setup) and modifying it to your needs.

As with the **macOS** configuration, you can remove roles that you don’t want in your setup by removing the corresponding entry in the **roles** section of the **playbook.yml** file.

![Roles](/assets/blog/my-debian-setup/roles.png "Roles")

Same goes for seeing what is in a role, as some are bundles of things like e.g. **cli-tools**, you can browse the **roles** directory and open the corresponding **tasks/main.yml** file.

![Roles Directory](/assets/blog/my-debian-setup/roles-directory.png "Roles directory")
