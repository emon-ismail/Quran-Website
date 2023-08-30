
import Swal from 'sweetalert2';

function MoodComponent() {
  const handleMoodConfirmation = async () => {
    const result = await Swal.fire({
      title: 'Mood OFF ??',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'YES',
      cancelButtonText: 'NO',
      showCancelButton: true,
      showCloseButton: true,
    });

    if (result.isConfirmed) {
      try {
        // Send the confirmation to your server for database storage
        const response = await fetch('http://localhost:5000/confirm-mood', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ confirmed: true }),
        });

        if (response.ok) {
          Swal.fire('Confirmed!', 'Your mood is confirmed.', 'success');
        } else {
          Swal.fire('Error', 'An error occurred.', 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'An error occurred.', 'error');
      }
    }
  };

  return (
    <div>
      <button onClick={handleMoodConfirmation}>Trigger Mood Confirmation</button>
    </div>
  );
}

export default MoodComponent;
