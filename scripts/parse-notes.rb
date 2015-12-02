require 'open-uri'
require 'nokogiri'
require 'json'

open('http://localhost:63342/thehollowmen/original/Notesonpoem.htm') do |f|

  doc = Nokogiri::HTML(f)
  table = doc.at_xpath('//table[count(tr) > 1]')

  notes = []
  note = nil

  table.xpath('tr').each do |tr|

    td = tr.xpath('td')
    td = td.map { |td| td.content.gsub("\u00A0", ' ').strip }
    td = td.select { |txt| not txt.empty? }
    next if td.empty?

    if td[0] =~ /^\d+/

      notes << note if note

      note = {
          'note'     => td[0],
          'title'       => td[1],
          'description' => td[2] || ''
      }

    elsif td[0] =~ /^-(\d+)/

      section = {
          'number'      => $1,
          'title'       => td[1] || '',
          'description' => td[2] || ''
      }

      note['section'] ||= []
      note['section'] << section
    end

  end

  notes << note if note

  puts JSON.pretty_generate(notes)

end