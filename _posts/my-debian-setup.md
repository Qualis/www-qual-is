---
title: "Make Your Debian Setup Testable and Repeatable"
excerpt: "Automate your Debian setup with Ansible to ensure a consistent, repeatable, and testable system configuration. This approach saves time, reduces errors, and keeps your setup version-controlled."
topic: "engineering"
date: "2022-03-13"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
---

For even longer than I have been using [Ansible](https://www.ansible.com/) to manage [my macOS setup](/posts/my-macos-setup), I have been leveraging the same process for **Debian** (which initially started with **Ubuntu** but later expanded to support both).

Automating your OS setup ensures that your environment is **consistent, repeatable, and testable**, whether you're setting up a new machine or maintaining an existing one. This guide walks you through my approach and how you can adapt it for your needs.

## Why Automate Your Debian Setup?

Setting up a system manually every time is time-consuming, error-prone, and difficult to track. By automating your setup using **Ansible**, you get:

- **Repeatability** - Run the same setup across multiple machines with confidence.
- **Testability** - Validate configurations and quickly identify issues.
- **Version Control** - Store your setup in a repository and track changes over time.
- **Flexibility** - Modify and extend the configuration to match evolving requirements.

## Getting Started with My Debian Setup

You can find my Ansible-based Debian setup on GitHub:

[https://github.com/svo/my-debian-setup](https://github.com/svo/my-debian-setup)

Since the setup includes various components, I recommend forking the repository and tailoring it to your specific needs.

### Structure of the Setup

The setup consists of **roles**, which define different aspects of the system configuration. Each role encapsulates specific tasks, making it modular and easy to customize.

For example, to exclude certain roles, simply remove the corresponding entry in the **roles** section of the **playbook.yml** file.

![Roles](/assets/blog/my-debian-setup/roles.png "Roles")

If you want to inspect what each role does, you can browse the **roles** directory and open the corresponding **tasks/main.yml** file.

![Roles Directory](/assets/blog/my-debian-setup/roles-directory.png "Roles directory")

### Example Playbook Structure

```yaml
- hosts: localhost
  become: true
  roles:
    - cli-tools
    - development
```

Here’s what these roles do:

- **cli-tools** - Installs command-line utilities (e.g., **htop**, **curl**).
- **development** - Sets up development tools like **git**, **docker**, and programming languages.

**NOTE:** This is not best practice as roles should be singularly purposed. I have gone this route to limit the number of roles and make it easier to maintain the setup.

## Customizing Your Setup

1. **Fork the Repository** - Clone your own version and modify as needed.
2. **Modify playbook.yml** - Add or remove roles to fit your setup.
3. **Customize Roles** - Edit task files under **roles/** to install specific packages or configurations.
4. **Run the Playbook** - Execute the following command:

   ```sh
   ./prepare.sh && ./build.sh
   ```

## Testing Your Setup

- Utilize [GitHub Workflow](https://github.com/svo/my-debian-setup/blob/main/.github/workflows/main.yml)

## Conclusion

Automating your Debian setup with Ansible ensures a streamlined, reliable, and efficient system configuration. Whether setting up a fresh machine or maintaining consistency across multiple systems, this approach saves time and reduces errors. Start by forking my repository, adapt it to your workflow, and enjoy a hassle-free system setup.
