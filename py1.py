import paramiko

def turn_off_system(ip_address, username, password):
    # Create SSH client
    ssh_client = paramiko.SSHClient()
    ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    try:
        # Connect to the system
        ssh_client.connect(ip_address, username=username, password=password)
        
        # Execute the shutdown command
        stdin, stdout, stderr = ssh_client.exec_command('sudo shutdown -h now')
        
        # Wait for the command to finish
        stdout.channel.recv_exit_status()
        print("System has been shut down successfully.")

    except paramiko.AuthenticationException:
        print("Authentication failed. Please check your credentials.")
    except paramiko.SSHException as e:
        print("SSH connection failed:", str(e))
    finally:
        # Close the SSH connection
        ssh_client.close()

# Usage example
turn_off_system('192.168.1.238', 'your_username', 'your_password')
