// Sélection de la dropzone
const dropzone = document.getElementById('dropzone');

// Prévenir les actions par défaut pour les événements de glisser-déposer
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
    });
});

// Ajouter une classe visuelle quand on glisse un fichier dans la zone
dropzone.addEventListener('dragover', () => {
    dropzone.classList.add('dragover');
});

// Retirer la classe visuelle quand on quitte la zone ou qu'on dépose
dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
});
dropzone.addEventListener('drop', () => {
    dropzone.classList.remove('dragover');
});

// Gestion du dépôt de fichiers
dropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;

  // Afficher un message dans la console ou une alerte
    if (files.length > 0) {
    alert(`${files.length} fichier(s) déposé(s)`);
    console.log('Fichiers déposés :', files);
    
    // Afficher les noms des fichiers déposés
    Array.from(files).forEach(file => {
        console.log(`Nom du fichier : ${file.name}`);
    });
    }
});

// Sélection de l'élément liste
const fileList = document.getElementById('fileList');

// Gestion du dépôt de fichiers
dropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;

    if (files.length > 0) {
    fileList.innerHTML = '';  // Vider la liste avant d'ajouter les nouveaux fichiers
    Array.from(files).forEach(file => {
        const li = document.createElement('li');
        li.textContent = `Nom du fichier : ${file.name}`;
        fileList.appendChild(li);
    });
    }
});
