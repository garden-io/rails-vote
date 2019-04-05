class CreateVotesTable < ActiveRecord::Migration[5.2]

  def up
    create_table :votes do |t|
      t.text :animal
      t.timestamps
    end
    add_index :votes, :animal
  end

  def down
    drop_table :votes
  end

end
