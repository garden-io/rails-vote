require 'test_helper'

class VoteControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get vote_index_url
    assert_response :success
  end

  test "should get request" do
    get vote_request_url
    assert_response :success
  end

  test "should get notify_of_completion" do
    get vote_notify_of_completion_url
    assert_response :success
  end

end
