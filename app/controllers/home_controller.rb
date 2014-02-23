class HomeController < ApplicationController
  before_filter :authenticate_user!, only: :index
  doorkeeper_for :all

  def foo
    render text: 'foo'
  end

  def bar
    render text: 'bar'
  end

  def baz
    render text: 'baz'
  end
end
