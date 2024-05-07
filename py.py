import os

def turn_off_system(ip_address, username, password):
    
    shutdown_command = f"shutdown /s /m \\\\{ip_address} /t 0 /f /c 'Shutdown initiated by remote user' /d p:4:1"

    try:
        
        os.system(shutdown_command)
        print("System has been shut down successfully.")

    except Exception as e:
        print("An error occurred:", str(e))


turn_off_system('192.168.1.162', 'your_username', 'your_password')
