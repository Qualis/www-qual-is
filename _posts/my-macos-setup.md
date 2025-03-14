---
title: "Make Your macOS Setup Testable and Repeatable"
excerpt: "Automate your macOS setup with Ansible to ensure a consistent, repeatable, and testable system configuration. This approach saves time, reduces errors, and keeps your setup version-controlled."
coverImage: "/assets/blog/categories/engineering.png"
date: "2022-03-12"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
ogImage:
  url: "/assets/blog/categories/engineering.png"
---

## Make Your macOS Setup Testable and Repeatable

For quite some time, I have been using [Ansible](https://www.ansible.com/) to manage my **macOS** setup. Automating your OS configuration ensures a **consistent, repeatable, and testable** environment, whether you're setting up a new Mac or maintaining an existing one. This guide walks you through my approach and how you can adapt it for your needs.

## Why Automate Your macOS Setup?

Setting up a system manually each time is time-consuming, error-prone, and difficult to track. By automating your setup with **Ansible**, you gain:

- **Repeatability** - Consistently set up multiple machines with confidence.
- **Testability** - Validate configurations and quickly identify issues.
- **Version Control** - Store your setup in a repository and track changes over time.
- **Flexibility** - Modify and extend configurations to match evolving requirements.

## Getting Started with My macOS Setup

You can find my Ansible-based macOS setup on GitHub:

[https://github.com/svo/my-macos-setup](https://github.com/svo/my-macos-setup)

Since the setup includes various components, I recommend forking the repository and tailoring it to your specific needs.

### Structure of the Setup

The setup consists of **roles**, each defining a specific aspect of system configuration. This modular approach makes it easy to customize and maintain.

To exclude certain roles, simply remove the corresponding entry in the **roles** section of the **playbook.yml** file.

![Roles](/assets/blog/my-macos-setup/roles.png "Roles")

If you want to see what each role does, browse the **roles** directory and open the corresponding **tasks/main.yml** file.

![Roles Directory](/assets/blog/my-macos-setup/roles-directory.png "Roles directory")

### Example Playbook Structure

```yaml
- hosts: localhost
  become: true
  roles:
    - cli-tools
    - development
```

Here’s what these roles do:
- **cli-tools** - Installs essential command-line utilities (e.g., **htop**, **curl**).
- **development** - Sets up development tools like **git**, **docker**, and programming languages.

**NOTE:** This is not necessarily best practice, as roles should ideally be singularly purposed. However, I have structured it this way to reduce the number of roles and make it easier to maintain the setup.

## Customizing Your Setup

1. **Fork the Repository** - Clone your own version and modify it as needed.
2. **Modify **playbook.yml**** - Add or remove roles to fit your setup.
3. **Customize Roles** - Edit task files under **roles/** to install specific packages or configurations.
4. **Run the Playbook** - Execute the following command:

   ```sh
   ./prepare.sh && ./build.sh
   ```

## Testing Your Setup

- Utilize [GitHub Workflow](https://github.com/svo/my-macos-setup/blob/main/.github/workflows/main.yml) to validate your setup.

## Conclusion

Automating your macOS setup with Ansible ensures a streamlined, reliable, and efficient system configuration. Whether setting up a fresh Mac or maintaining consistency across multiple devices, this approach saves time and reduces errors. Start by forking my repository, adapt it to your workflow, and enjoy a hassle-free setup.
