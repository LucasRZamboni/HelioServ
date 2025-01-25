/* eslint-disable @typescript-eslint/no-unused-vars */
export const handleSubmit = async (form: HTMLFormElement, notification: HTMLElement) => {
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Formulário enviado com sucesso!'); // Verifique no console
      notification.classList.remove('hidden');
      notification.classList.add('block');

      setTimeout(() => {
        notification.classList.remove('block');
        notification.classList.add('hidden');
      }, 3000);

      form.reset();
    } else {
      throw new Error('Erro ao enviar a mensagem.');
    }
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error); // Verifique no console
    notification.textContent = 'Erro ao enviar a mensagem. Tente novamente.';
    notification.classList.remove('hidden', 'bg-green-500');
    notification.classList.add('block', 'bg-red-500');

    setTimeout(() => {
      notification.classList.remove('block');
      notification.classList.add('hidden');
    }, 5000);
  }
};