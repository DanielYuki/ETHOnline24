import db from "../database.js";

export const retrieveFidFromConverseUsername = (req, res) => {
  const { username } = req.params;

  db.get('SELECT fid FROM converse WHERE username = ?', [username], (err, row) => {
    if (err) {
      console.error('Error while retrieving fid from converse: ', err);
      return res.status(500).json({ message: 'An error occurred' });
    } 

    if(!row) {
      return res.status(404).json({ message: 'No fid found' });
    }
    
    res.status(200).json({ fid: row.fid });
  });
}

export const subscribe = (req, res) => {
  
}

export const registerConverseUsername = (username, fid) => {
  db.run('INSERT OR REPLACE INTO converse (username, fid) VALUES (?, ?)', [username, fid], (err) => {
    if (err) {
      console.error('Error while registering converse username: ', err);
      return res.status(500).json({ message: 'An error occurred' });
    }

    res.status(200).json({ message: 'Username registered successfully' });
  });
}