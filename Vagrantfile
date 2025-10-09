# -*- mode: ruby -*-
# vi: set ft=ruby :

ENV['VAGRANT_DEFAULT_PROVIDER'] = 'docker'

VAGRANTFILE_API_VERSION = '2'.freeze
PLAYBOOK = 'infrastructure/ansible/playbook-development.yml'.freeze

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.ssh.extra_args = ["-t", "cd /vagrant; bash --login"]
  config.vm.define 'development' do |development|
    development.vm.provision 'shell', privileged: true, run: 'always', inline: <<-SHELL
      chgrp vagrant /var/run/docker.sock
    SHELL

    development.vm.provider :docker do |docker|
      docker.image = "svanosselaer/www-qual-is-development:latest"
      docker.has_ssh = true
      docker.pull = true
      docker.ports = ['3000:3000']
      docker.volumes = [
        '/var/run/docker.sock:/var/run/docker.sock'
      ]
    end

    if Vagrant.has_plugin?("vagrant-cachier")
      development.cache.scope = :machine
      development.cache.enable :apt
    end

    development.vm.hostname = 'www-qual-is-vagrant'

    development.vm.provision :ansible do |ansible|
      ansible.playbook = PLAYBOOK
      ansible.compatibility_mode = '2.0'
      ansible.extra_vars = {
        ansible_python_interpreter: '/usr/bin/python3'
      }
    end
  end
end
