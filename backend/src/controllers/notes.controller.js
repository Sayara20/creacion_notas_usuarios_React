const notesCtrl = {};
const Note = require('../models/notes');

notesCtrl.getNotes = async(req, res) => {
    const notes = await Note.find();
    res.json(notes);

}

notesCtrl.createNote = async(req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    })
    await newNote.save();
    //console.log(newNote);
    res.json({ message: 'creacion de notas' })

};

notesCtrl.getNote = async(req, res) => {
    const note = await Note.findById(req.params.id);
    //console.log(Note)
    //res.json({ title: 'nota obtenida' })
    res.json(note)
}

notesCtrl.updateNote = async(req, res) => {
    const { title, content, author } = req.body;

    // await ModelName.findOneAndUpdate({ matchQuery }, { $set: updateData }, { useFindAndModify: false });
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        author,
        content
    });

    res.json({ message: 'nota actualizadass' })
}





notesCtrl.deleteNote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'nota emliminada' })
}



module.exports = notesCtrl;